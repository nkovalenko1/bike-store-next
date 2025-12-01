"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AddcartDrawer from "@/components/custom/add-cart-drawer";
import CycleDetailSwiper from "@/components/custom/cycle-detail-swiper";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/api/products";
import type { ProductWithVariants } from "@/types/product";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ErrorMessage from "@/components/ui/error-message";
import NotFound from "@/components/ui/not-found";
import { useCartStore } from "@/lib/stores/cart-store";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;
  const [product, setProduct] = useState<ProductWithVariants | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getProduct(productId);
        setProduct(data);
        if (data.variants && data.variants.length > 0) {
          setSelectedVariant(data.variants[0].id);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ошибка загрузки товара"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    if (!product) return;

    try {
      await addItem({
        productId: product.id,
        variantId: selectedVariant || undefined,
        quantity: 1,
      });
    } catch (error) {
      console.error("Ошибка добавления в корзину:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <NotFound
        title="Товар не найден"
        message="Запрашиваемый товар не существует или был удален"
      />
    );
  }

  const currentVariant = product.variants?.find(
    (v) => v.id === selectedVariant
  );
  const price = currentVariant?.price ?? product.price;
  const productImages = Array.isArray(product.images) ? product.images : [];
  const images = currentVariant?.image
    ? [currentVariant.image, ...productImages]
    : productImages;

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <CycleDetailSwiper images={images.length > 0 ? images : ['/images/placeholder.png']} />
        <div className="container shrink-0 space-y-5 px-4 pt-12 lg:w-[500px] lg:max-w-none lg:space-y-[30px] lg:px-14 xl:w-[600px] xl:py-[100px] 2xl:w-[716px]">
          <div>
            <h1 className="mb-2 line-clamp-2 text-2xl font-bold sm:text-3xl md:text-4xl/tight lg:mb-4 xl:mb-[30px] xl:text-[50px]/[60px]">
              {product.name}
            </h1>
            <div>
              <div className="mb-1 flex items-center gap-3 xl:mb-3">
                <h2 className="text-2xl font-medium lg:text-3xl/10 xl:text-[40px]/[48px]">
                  ${price.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm/4 font-medium ring-1 ring-gray-100">
            <div className="flex items-center gap-1.5">
              <span>4.5</span>
              <Star className="size-4 fill-[#EAB308] stroke-[#EAB308]" />
            </div>
            <span className="block h-4 w-px shrink-0 rounded-full bg-gray-100"></span>
            <p>
              1.5k&nbsp;
              <span className="text-gray">Ratings</span>
            </p>
          </div>

          {product.variants && product.variants.length > 0 && (
            <div className="border-y border-gray-100 py-5 xl:py-[30px]">
              <div className="font-medium">
                <span className="text-gray">color:&nbsp;</span>
                {currentVariant?.name || "Выберите вариант"}
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                {product.variants.map((variant) => (
                  <div
                    key={variant.id}
                    className={`relative grid size-[30px] shrink-0 place-content-center rounded-full border ${
                      selectedVariant === variant.id
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  >
                    {variant.color ? (
                      <span
                        className="block size-[18px] rounded-full"
                        style={{ backgroundColor: variant.color }}
                      />
                    ) : (
                      <span className="block size-[18px] rounded-full bg-gray-300" />
                    )}
                    <input
                      name="variant"
                      type="radio"
                      value={variant.id}
                      checked={selectedVariant === variant.id}
                      onChange={() => setSelectedVariant(variant.id)}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="mb-2.5 text-sm/4 font-medium uppercase text-gray">
              Product Description
            </h3>
            <p className="line-clamp-5 text-base/[23px]">
              {product.description || "Описание товара отсутствует"}
            </p>
          </div>
          <div className="flex gap-5">
            <Link href="/cart">
              <Button type="button">Buy Now</Button>
            </Link>
            <AddcartDrawer
              button={
                <Button
                  variant="outline"
                  type="button"
                  className="border-black"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

