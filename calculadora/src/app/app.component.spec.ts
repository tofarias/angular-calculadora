import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/components/calculadora.component';
import { CalculadoraModule } from './calculadora/calculadora.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        CalculadoraModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
