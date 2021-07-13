import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autentica(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/user/login`,
        {
          userName: usuario,
          password: senha,
        },
        { observe: 'response' } // Serve para que tenhamos acesso ao header da requisição
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? ''; // Capturando o token que vem no header
          this.usuarioService.salvaToken(authToken); // Salvando o token
        })
      );
  }
}
