import PropTypes from "prop-types";

export const SectionContainer = ({className = "", children}) =>(
    <>
    <section className={`${className} w-full mx-auto md:max-w-6xl max-w-2xl pb-10`} >
     {children} 
    </section>
    </>
)

SectionContainer.propTypes = {
    className: PropTypes.string, 
    children: PropTypes.node, 
  };

