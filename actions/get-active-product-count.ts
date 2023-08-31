import prismadb from "@/lib/prismadb";

export const getActiveProductCount = async (storeId: string) => {
    const activeProductCount = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false,
        },
    });

    return activeProductCount;
}