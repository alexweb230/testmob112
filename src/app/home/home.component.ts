import {Component, OnInit} from '@angular/core';


import {RadSideDrawer} from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    title = 'appshematick';

    public liveBox: string = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GatWoipbkSg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    newsListMain = [
        {
            title: 'Краска, которой печатали защитные элементы на бюллетенях для президентских выборов, никому не продается, - ЦИК',
            data: '14:30 23.10.19'
        },

        {
            title: 'Полиция открыла 189 уголовных производств за нарушения избирательного законодательства',
            data: '14:30 23.10.19'
        },
        {
            title: 'В Одесской обл. СБУ ликвидировала канал контрабанды кокаина из страны Южной Америки',
            data: '14:30 23.10.19'
        },
        {
            title: 'Группа "Время и Стекло" выпустила черно-белый клип на свою первую украиноязычную песню',
            data: '14:30 23.10.19'

        },
        {
            title: 'Вступили в силу новые санкции Украины против лиц, причастных к российской агрессии',
            data: '14:30 23.10.19'
        },
        {
            title: 'На печать бюллетеней для президентских выборов в Украине потратили более 165 млн грн, - ЦИК',
            data: '14:30 23.10.19'
        },
        {
            title: 'Украина не заинтересована в китайских инвестициях? А зря',
            data: '14:30 23.10.19'
        },
        {
            title: 'Карта ООС по состоянию на 21 марта',
            data: '14:30 23.10.19'
        },
        {
            title: 'СБУ разоблачила антиукраинских интернет-агитаторов из Николаева и Одессы',
            data: '14:30 23.10.19'
        },
        {
            title: 'Межбанк открылся долларом по 27,25-27,30 грн, евро – по 31,13-31,20 грн',
            data: '14:30 23.10.19'
        },
    ]


    constructor() {
    }

    ngOnInit() {
    }
}
