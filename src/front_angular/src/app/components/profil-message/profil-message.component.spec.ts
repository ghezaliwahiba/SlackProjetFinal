import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMessageComponent } from './profil-message.component';

describe('ProfilMessageComponent', () => {
  let component: ProfilMessageComponent;
  let fixture: ComponentFixture<ProfilMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
