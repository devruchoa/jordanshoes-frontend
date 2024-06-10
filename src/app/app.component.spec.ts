import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let meta: Meta;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {provide: Meta, useClass: Meta}
      ]
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    meta = TestBed.inject(Meta);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('Meta tags', () => {
    it('should have a metatag name=description', () => {
      const descriptionTag = meta.getTag('name=description');
      expect(descriptionTag).not.toBeNull();
    });

    it('should have the correct content in the description metatag', () => {
      const descriptionTag = meta.getTag('name=description');
      const expectedContent = 'A Jordan Shoes é a melhor loja de Jordan. O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.';
      if (descriptionTag) {
        expect(descriptionTag.content).toBe(expectedContent);
      } else {
        fail('descriptionTag should not be null');
      }
    });
  });
});
