import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
      <div class="navbar bg-base-100 autoJustify">
      <div class="flex-1">
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1">. . .</div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/resume">Professional Resume</Link></li>
          <li><Link to="/work">Work History</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          {/* <li><Link to="/test">Test Page</Link></li> */}
          { <li><Link to="/portfolio">Portfolio</Link></li> }
          <li>
          </li>
        </ul>
      </div>
    </div>

    )
}