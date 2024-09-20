import { Component } from '@angular/core';
import { HeaderType2Component } from '../headerTypes/header-type2/header-type2.component';
import { HeaderType3Component } from '../headerTypes/header-type3/header-type3.component';
import { HeaderType4Component } from '../headerTypes/header-type4/header-type4.component';
import { NgComponentOutlet } from '@angular/common';
import { HeaderType1Component } from '../headerTypes/header-type1/header-type1.component';

@Component({
  selector: 'app-narbar-page',
  standalone: true,
  imports: [
    HeaderType1Component,
    HeaderType2Component,
    HeaderType3Component,
    HeaderType4Component,
  ],
  templateUrl: './narbar-page.component.html',
  styleUrl: './narbar-page.component.css',
})
export class NarbarPageComponent {}
