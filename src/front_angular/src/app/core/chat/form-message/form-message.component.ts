import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../../../service/messages.service/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrl: './form-message.component.css'
})
export class FormMessageComponent implements OnInit{
formMessage! : FormGroup;

constructor(private fb: FormBuilder, private messageService: MessagesService, private router: Router){}

ngOnInit(){
  this.formMessage = this.fb.group({
    content: ['', [Validators.maxLength(200), Validators.minLength(2)]]
  })
}


save(){
  const newMessage = this.formMessage.value;
  console.log(newMessage);

  this.messageService.addMessage(newMessage).subscribe(v => {
    // this.router.navigate(['/messageForm'])
    console.log(v);
    
  })
  
}
}
