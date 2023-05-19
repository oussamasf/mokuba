import { Test, TestingModule } from '@nestjs/testing';
import { DimOneController } from './dim-one.controller';

describe('DimOneController', () => {
  let controller: DimOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimOneController],
    }).compile();

    controller = module.get<DimOneController>(DimOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
