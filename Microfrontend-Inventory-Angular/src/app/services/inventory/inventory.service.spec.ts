import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { INVENTORY_MOCK } from '../../mocks/inventary.mocks';
import { InventoryService } from './inventory.service';
import { Inventory } from '../../interfaces/inventory.interface';

describe('InventoryService', () => {
  let service: InventoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()]
    });
    service = TestBed.inject(InventoryService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });
 
  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });
   describe('getAllInventory', () => {
  
    it('debería realizar una petición GET y retornar una lista de inventarios', () => {
      const countInventory = 10;
      const mockInventory: Inventory[] = INVENTORY_MOCK;

      service.getAllInventory(countInventory).subscribe((inventarios) => {
        expect(inventarios).toEqual(mockInventory);
        expect(inventarios.length).toBe(mockInventory.length);
      });

      const req = httpMock.expectOne(`http://localhost:3004/api/inventory/${countInventory}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockInventory);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countInventory = 10;

      service.getAllInventory(countInventory).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`http://localhost:3004/api/inventory/${countInventory}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  
  });

});
