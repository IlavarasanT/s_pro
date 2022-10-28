import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmainpageComponent } from './newmainpage.component';

describe('NewmainpageComponent', () => {
  let component: NewmainpageComponent;
  let fixture: ComponentFixture<NewmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
