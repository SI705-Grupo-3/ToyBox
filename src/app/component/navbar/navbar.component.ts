import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, ViewChild , Inject} from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('footer') footer: ElementRef | null = null;
  scrollToFooter() {
    if (this.footer) {
      this.footer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  currentUser:any;
  constructor(private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,private userService: UserService) { 
    this.userService.userChanged.subscribe(user => {
      this.currentUser = user;
  })
  
}
ngOnInit(): void {
}
}
