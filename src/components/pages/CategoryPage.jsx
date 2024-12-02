
import { SectionContainer } from "../sections/SectionContainer";
import { CategoryCard } from "../CategoryCard";
import { useAuth } from "../sections/SectionContext";

export const CategoryPage = () =>{
  const {category} = useAuth();


    return(
    <SectionContainer className="py-10 md:pt-10">
    <div className="w-full text-left ">
     <h3 className="md:text-3xl text-3xl font-medium text-black mb-8">Categorías</h3>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 ">
      {category.slice(0,4).map((text,index) => (
          <CategoryCard key={index} title={text} />
      ))}
  </div>
</div>
    </SectionContainer>
    )
}