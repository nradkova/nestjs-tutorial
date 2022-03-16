import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number,
    @Body('description') prodDescription: string,
  ): {} {
    const id = this.productService.insertProduct(
      prodTitle,
      prodPrice,
      prodDescription,
    );
    return { id };
  }

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getProductById(prodId)
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number,
    @Body('description') prodDescription: string,
  ) {
      return this.productService.editProductById(prodId,prodTitle,prodPrice,prodDescription)
  }

  @Delete(':id')
  delProduct(@Param('id') prodId: string) {
    this.productService.deleteProduct(prodId)
  }
}
