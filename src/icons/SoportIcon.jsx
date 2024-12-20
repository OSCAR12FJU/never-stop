import PropTypes from "prop-types"

export const SoportIcon = ({className = ''}) =>(
<svg xmlns="http://www.w3.org/2000/svg" className= {`${className}`} viewBox="0 0 24 24" strokeWidth="1" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
  <path d="M18 19c0 1.657 -2.686 3 -6 3" />
  <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
  <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
</svg>
)


SoportIcon.propTypes = {
    className: PropTypes.string, 
  };