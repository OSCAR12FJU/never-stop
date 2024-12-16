import PropTypes from "prop-types";


export const HamburgueIcon = ({className = ""}) =>(

    <svg className={`${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1h15M1 7h15M1 13h15"/>
    </svg>
    )


    HamburgueIcon.propTypes = {
        className: PropTypes.string, 
      };