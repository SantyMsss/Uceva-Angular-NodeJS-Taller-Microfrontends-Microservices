import { ComponentFixture, TestBed } from '@angular/core/testing';
import { INVENTORY_MOCK } from '../../mocks/inventary.mocks';
import { InventoryTableComponent } from './inventory-table.component';
import { By } from '@angular/platform-browser';
import { formatDate } from '@angular/common';

describe('InventoryTableComponent', () => {
  let component: InventoryTableComponent;
  let fixture: ComponentFixture<InventoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it ('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();

  });

 it('debería renderizar una fila por cada inventario', () => {
  component.inventory = INVENTORY_MOCK;
  fixture.detectChanges();

  const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

  rows.forEach((row, index) => {
    const columns = row.queryAll(By.css('th, td'));
    const inventory = component.inventory[index];

    expect(columns[0].nativeElement.textContent.trim()).toBe(String(inventory.id));
    expect(columns[1].nativeElement.textContent.trim()).toBe(String(inventory.productId));
    expect(columns[2].nativeElement.textContent.trim()).toBe(inventory.productName);
    expect(columns[3].nativeElement.textContent.trim()).toBe(String(inventory.quantity));
    expect(columns[4].nativeElement.textContent.trim()).toBe(inventory.movements);
    expect(columns[5].nativeElement.textContent.trim()).toBe(
      formatDate(inventory.lastUpdated, 'mediumDate', 'en-US') // "Jun 1, 2024"
    );
  });
});

  it('deberia mapear cada movimiento a su BadgeType correcto', () => {
    expect(component.inventoryMap['entrada']).toBe('success');
    expect(component.inventoryMap['salida']).toBe('danger');
    expect(component.inventoryMap['ajuste']).toBe('warning');
  });
});
