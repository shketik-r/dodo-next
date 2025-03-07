import { Container, Title, TopBar, Filters, ProductsGroupList } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { Suspense } from "react";


export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          variations: true,
          ingredients: true,
        },
      },
    }
  });


  return (
    <>

      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories}  />

      <Container className="mt-10 pb-14">
        {/* фильтрация */}
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense >
              <Filters className="123" />
            </Suspense>
          </div>

          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">


              {
                categories.map((category) => (
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      products={category.products}
                      categoryId={category.id}
                    />

                  ))
                )
            }


            </div>
          </div>
        </div>

      </Container>

    </>
  );
}
