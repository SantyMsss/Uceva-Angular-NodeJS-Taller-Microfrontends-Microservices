import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';
import { OrdersTableComponent } from './orders-table.component';

describe('OrdersTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada pedido', () => {
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.orders.length);
  });

  it('debería mostrar los datos del pedido en cada columna', () => {
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const order = component.orders[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(order.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(order.customerName);
      expect(columns[2].nativeElement.textContent.trim()).toBe(order.product);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(order.quantity));
    });
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Pending']).toBe('warning');
    expect(component.statusMap['Processing']).toBe('primary');
    expect(component.statusMap['Shipped']).toBe('secondary');
    expect(component.statusMap['Delivered']).toBe('success');
    expect(component.statusMap['Cancelled']).toBe('danger');
  });

});
