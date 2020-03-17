import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectEventsPage } from './select-events.page';

describe('SelectEventsPage', () => {
  let component: SelectEventsPage;
  let fixture: ComponentFixture<SelectEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
