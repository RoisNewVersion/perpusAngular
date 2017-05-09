import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnggotaComponent } from './anggota.component';

describe('AnggotaComponent', () => {
  let component: AnggotaComponent;
  let fixture: ComponentFixture<AnggotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnggotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnggotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
