import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPage } from './inventory.page';
import { InventoryService } from '../../services/inventory/inventory.service';
import { provideHttpClient } from '@angular/common/http';
import { INVENTORY_MOCK } from '../../mocks/inventary.mocks';
import { InventoryTableComponent } from '../../components/inventory-table/inventory-table.component';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

describe('InventoryPage', () => {
  let component: InventoryPage;
  let fixture: ComponentFixture<InventoryPage>;
  let inventoryService: InventoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryPage);
    component = fixture.componentInstance;
    inventoryService = TestBed.inject(InventoryService);
    
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllInventory al iniciar', () => {
    const spyGetAllInventory = jest.spyOn(inventoryService, 'getAllInventory').mockReturnValue(of(INVENTORY_MOCK));
    fixture.detectChanges();
    expect(spyGetAllInventory).toHaveBeenCalled();
  });

  it('debería asignar los inventarios recibidos del servicio', () => {
    jest.spyOn(inventoryService, 'getAllInventory').mockReturnValue(of(INVENTORY_MOCK));
    fixture.detectChanges();
    expect(component.inventory).toEqual(INVENTORY_MOCK);
  });

  it('debería pasar los inventarios al componente inventory-table', () => {
    jest.spyOn(inventoryService, 'getAllInventory').mockReturnValue(of(INVENTORY_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(InventoryTableComponent))
      .componentInstance;
    expect(tableComponent.inventory).toEqual(INVENTORY_MOCK);
  });

  it('debería manejar el error cuando falla getAllInventory', () => {
    component.inventory = [];
    const errorResponse = new Error('Error al cargar inventario');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(inventoryService, 'getAllInventory').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(inventoryService.getAllInventory).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.inventory.length).toBe(0);
  });
});
