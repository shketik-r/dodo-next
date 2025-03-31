import { ChooseProductModal } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>

export default async function ProductModalPage(PageProps: { params: Params }) {
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
    <ChooseProductModal product={product} />
  )
}