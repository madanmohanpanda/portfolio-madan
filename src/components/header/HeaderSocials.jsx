import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/madan-mohan-panda-511aa924a/" target='__blank'><FaLinkedin /></a>
        <a href="https://leetcode.com/Madan8750/"><SiLeetcode /></a>
        <a href="https://github.com/madanmohanpanda" target='__blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials;