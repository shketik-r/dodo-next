import { Container, ProductImage, Title, GroupVariants } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

// import type { Metadata } from "next";
import { notFound } from "next/navigation";
type Params = Promise<{ id: string }>


// export async function generateMetadata(PageProps: { params: Params }): Promise<Metadata> {
//   const { id } = await PageProps.params

//   return {
//     title: `Продукт: ${id}`,
//   }
// }

export default async function ProductPage(PageProps: { params: Params }) {
  const { id } = await PageProps.params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id)
    }
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage
          className=""
          src={product.imageUrl}
          alt={product.name}
          size={40}
        />
        <div className="w-[490px] bg-[#f5f5f5] p-7">
          <Title
            className="text-[32px] font-extrabold"
            text={product.name}
            size="md"
          />
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus libero quidem autem quis voluptas at, quod temporibus et nisi, distinctio vitae facere nulla ad laboriosam assumenda praesentium molestiae unde?</p>

          <GroupVariants
            items={[{ name: 'Маленькая', value: '1' }, { name: 'Средняя', value: '2' }, { name: 'Большая', value: '3' }]}
            selectedValue="2"
            className="" />

        </div>
      </div>
    </Container>
  )
}