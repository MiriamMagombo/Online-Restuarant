import { Test, TestingModule } from '@nestjs/testing';
import { OnwerController } from './onwer.controller';

describe('OnwerController', () => {
  let controller: OnwerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnwerController],
    }).compile();

    controller = module.get<OnwerController>(OnwerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
