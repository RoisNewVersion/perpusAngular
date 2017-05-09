import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RakComponent } from './rak.component';

describe('RakComponent', () => {
  let component: RakComponent;
  let fixture: ComponentFixture<RakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
