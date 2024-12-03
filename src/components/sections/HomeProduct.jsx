import { CarrouselProducts } from "./CarrouselProduct"
import { SectionContainer } from "./SectionContainer"

export const HomeProduct = () =>{
    return(
        <>
        <SectionContainer className="px-5 md:px-10 mt-8">
        <CarrouselProducts />
        </SectionContainer>
        <SectionContainer className="md:hidden flex px-5 md:px-10 mt-4">
        <CarrouselProducts />
        </SectionContainer>
        </>

    )

}