import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeService } from '../home.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create homecomponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have stats elements', () => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.total .title').textContent).toContain('Total');
    expect(compiled.querySelector('.recovered .title').textContent).toContain('Recovered');
    expect(compiled.querySelector('.active .title').textContent).toContain('Active');
    expect(compiled.querySelector('.deadths .title').textContent).toContain('Deaths');
  });
});
