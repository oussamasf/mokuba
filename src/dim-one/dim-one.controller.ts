import { Controller, Get } from '@nestjs/common';

@Controller('dim-one')
export class DimOneController {
  @Get()
  getALLDim(): string {
    return 'All dims';
  }
}
