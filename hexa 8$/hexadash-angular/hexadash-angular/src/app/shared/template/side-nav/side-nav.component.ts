import { Component  } from '@angular/core';
import { ROUTES } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './side-nav.component.html'
})

export class SideNavComponent{

    public menuItems: any[]
    isFolded : boolean;
    isSideNavDark : boolean;
    isExpand : boolean;

    constructor( private themeService: ThemeConstantService) {}

    ngOnInit(): void {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
    }

    ngAfterViewInit(): void{
        /* Collapsed Menu dropdown */
        let submenus = document.querySelectorAll('.ant-menu li.ant-menu-submenu');
        let direction = document.querySelector('html').getAttribute('dir');
        submenus.forEach(item => {
            item.addEventListener('mouseover', function () {
                let menuItem = this;
                let menuItemRect = menuItem.getBoundingClientRect();
                let submenuWrapper = menuItem.querySelector('ul.ant-menu-sub');
                submenuWrapper.style.top = `${menuItemRect.top}px`;
                if (direction === 'ltr') {
                    submenuWrapper.style.left = `${menuItemRect.left + Math.round(menuItem.offsetWidth * 0.75) + 10}px`;
                } else if (direction === 'rtl') {
                    submenuWrapper.style.right = `${Math.round(menuItem.offsetWidth * 0.75) + 10}px`;
                }
            })
        });
    }

    closeMobileMenu(): void {
        if (window.innerWidth < 992) {
            this.isFolded = false;
            this.isExpand = !this.isExpand;
            this.themeService.toggleExpand(this.isExpand);
            this.themeService.toggleFold(this.isFolded);
        }
    }
}
