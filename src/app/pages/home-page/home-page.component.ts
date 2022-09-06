import { Component, OnInit, ViewEncapsulation,  } from '@angular/core';
import {Swiper, SwiperOptions } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { SwiperEvents } from 'swiper/types';
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],


})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper(".mySwiper", {
      // spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // breakpoints:{
      //     0:{
      //         slidesPerView:1,
      //     },
      //     640:{
      //         slidesPerView:1,
      //     },
      //     768:{
      //         slidesPerView:1,
      //     },
      //     1024:{
      //         slidesPerView:1,
      //     },
      //    }
    });

    var swiper = new Swiper(".rivew-swiper", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

     loop:true,
     breakpoints:{
      0:{
          slidesPerView:1,
      },
      640:{
          slidesPerView:2,
      },
      768:{
          slidesPerView:2,
      },
      1024:{
          slidesPerView:3,
      },
     }
    });
  }

}
