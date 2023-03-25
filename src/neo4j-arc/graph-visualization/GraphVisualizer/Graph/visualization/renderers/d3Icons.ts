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

const icons = {
  Forward:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g class="icon"><defs><style>.a {fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.5px;}</style></defs><title>forward</title><path class="a" d="M15.752,12H4.5a1.5,1.5,0,0,1,0-3H15.752L11.626,4.874a1.5,1.5,0,0,1,2.121-2.122L19.5,10.878a1.5,1.5,0,0,1,0,2.122l-5.753,5.753a1.5,1.5,0,1,1-2.121-2.122L15.752,12Z"/></g></svg>',
  Unlock:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g class="icon"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>Unlock</title><path class="a" d="M.75,9.75V6a5.25,5.25,0,0,1,10.5,0V9.75"/><rect class="a" x="6.75" y="9.75" width="16.5" height="13.5" rx="1.5" ry="1.5"/><line class="a" x1="15" y1="15" x2="15" y2="18"/></g></svg>',
  Remove:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g class="icon"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>Remove</title><path class="a" d="M8.153,13.664a12.271,12.271,0,0,1-5.936-4.15L1.008,7.96a.75.75,0,0,1,0-.92L2.217,5.486A12.268,12.268,0,0,1,11.9.75h0a12.269,12.269,0,0,1,9.684,4.736L22.792,7.04a.748.748,0,0,1,0,.92L21.584,9.514"/><path class="a" d="M10.4,10.937A3.749,3.749,0,1,1,15.338,9"/><circle class="a" cx="17.15" cy="17.25" r="6"/><line class="a" x1="14.15" y1="17.25" x2="20.15" y2="17.25"/></g></svg>',
  Delete:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g class="icon"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>Delete</title><path class="a" d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"/></g></svg>',
  Backward:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g class="icon"><defs><style>.a {fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.5px;}</style></defs><title>backward</title><path class="a" d="M8.248,12H19.5a1.5,1.5,0,0,1,0,3H8.248l4.126,4.126a1.5,1.5,0,0,1-2.121,2.122L4.5,13.122a1.5,1.5,0,0,1,0-2.122l5.753-5.753a1.5,1.5,0,1,1,2.121,2.122L8.248,12Z"/></g></svg>'
}
export default icons
