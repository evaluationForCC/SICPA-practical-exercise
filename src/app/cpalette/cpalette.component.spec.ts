import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaletteComponent } from './cpalette.component';

describe('CpaletteComponent', () => {
  let component: CpaletteComponent;
  let fixture: ComponentFixture<CpaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
