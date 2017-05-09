import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DendaComponent } from './denda.component';

describe('DendaComponent', () => {
  let component: DendaComponent;
  let fixture: ComponentFixture<DendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
