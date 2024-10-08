import { Component, OnInit }      from '@angular/core';
import { RouterOutlet }           from '@angular/router';
import { DNDService }             from './dnd.service';
import { Spell }                  from '../interfaces/spell';
import { APIResults }             from '../interfaces/apiresults';
import { SpellsAvailable }        from '../interfaces/spellsavailable';
import { SpellInfoComponent }     from './spellinfo/spellinfo.component';
import { LoginComponent }         from "./login/login.component";
import { MysqlError }             from 'mysql';
import { CreateAccountComponent } from "./login/create-account.component";

@Component({
  selector:   'app-root',
  standalone: true,
  providers:  [ DNDService ],
  imports:    [
    RouterOutlet,
    SpellInfoComponent,
    LoginComponent,
    CreateAccountComponent
  ],
  templateUrl: './app.component.html',
  styleUrl:    './app.component.scss'
})
export class AppComponent implements OnInit
{
  title = 'fartbuckle';
  myClericSpells: SpellsAvailable[] = [];
  mySpellInfo: Spell | null = null;
  mySelectedSpellIndex: number = Number.NaN;
  boolAppComplete = false;

  constructor(private dndService: DNDService)
  {}

  ngOnInit(): void
  {
    this.GetUserAuthorized();
  }

  GetUserAuthorized(): void
  {

  }

  // GetCericSpells(): void
  // {
  //   const endpoint = '/api/classes/cleric/spells';
  //   const myCallAPISubscription =
  //   {
  //     next: (clericSpells: APIResults<SpellsAvailable[]>) =>
  //     {
  //       this.myClericSpells = clericSpells.results
  //       console.log(this.myClericSpells)
  //     },
  //     error: (error: MysqlError) => console.log(error)
  //   }
  //   this.dndService.callAPI<APIResults<SpellsAvailable[]>>(endpoint).subscribe(myCallAPISubscription)
  // }
  // GetSpellInfo(url: string, index: number): void
  // {
  //   console.log(url)
  //   const myCallAPISubscription =
  //   {
  //     next: (spellInfo: Spell) =>
  //     {
  //       this.mySpellInfo = spellInfo;
  //       this.mySelectedSpellIndex = index;
  //       console.log(this.mySpellInfo)
  //     },
  //     error: (error: MysqlError) => console.log(error)
  //   }
  //   this.dndService.callAPI<Spell>(url).subscribe(myCallAPISubscription)
  // }
}
