/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { QueryResult } from 'neo4j-driver'
import semver from 'semver'

import { guessSemverVersion } from '../features/featureDuck.utils'
import { TrialStatus, VERSION_FOR_EDITOR_HISTORY_SETTING } from './dbMetaDuck'

type ServerInfo = {
  version: string | null
  edition: string | null
}
export function extractServerInfo(res: QueryResult): ServerInfo {
  const serverInfo: ServerInfo = {
    version: 'unknown',
    edition: ''
  }

  const resultObj = res.records.map(res => res.toObject())[0]
  if (!resultObj) {
    return serverInfo
  }

  if (resultObj.versions[0]) {
    serverInfo.version = resultObj.versions[0]
  }

  if (resultObj.edition[0]) {
    serverInfo.edition = resultObj.edition
  }

  // Get server edition if available
  if (res.records.length && res.records[0].keys.includes('edition')) {
    serverInfo.edition = res.records[0].get('edition')
  }

  // Some aura servers self report versions that need coercing (eg. 3.5 or 4.3-aura)
  if (!semver.valid(serverInfo.version)) {
    serverInfo.version = guessSemverVersion(serverInfo.version)
  }

  return serverInfo
}

export const extractTrialStatus = (res: QueryResult): TrialStatus => {
  const resultObj = res.records.map(res => res.toObject())[0]

  const trialStatus: TrialStatus = {
    commerialLicenseAccepted: null,
    expired: null,
    daysRemaing: null
  }

  if (!resultObj) {
    return trialStatus
  }

  const value = resultObj.value[0] as number | 'yes' | 'no' | 'expired'
  if (value) {
    if (typeof value === 'number') {
      trialStatus.daysRemaing = value
    } else {
      trialStatus.commerialLicenseAccepted = value === 'yes'
      trialStatus.expired = value === 'expired'
    }
  }

  return trialStatus
}

export const versionHasEditorHistorySetting = (version: string | null) => {
  if (!version) return false
  return semver.gte(version, VERSION_FOR_EDITOR_HISTORY_SETTING)
}
