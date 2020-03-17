import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrinterOptionPage } from './printer-option.page';

describe('PrinterOptionPage', () => {
  let component: PrinterOptionPage;
  let fixture: ComponentFixture<PrinterOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterOptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrinterOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
