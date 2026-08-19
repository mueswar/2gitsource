import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCreate } from './part-create';

describe('PartCreate', () => {
  let component: PartCreate;
  let fixture: ComponentFixture<PartCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(PartCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
