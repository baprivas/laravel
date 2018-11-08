@extends('layouts.app')

@section('content')

<div class="black">

    <div class="col s12 m12 l12">
    
        <div class="col s12 m12 l4">
            <div class="section"></div>
            <div class="section"></div>
            <div class="section"></div>

            <div class="section center">
                <div class="col s12 m12 l9 offset-l1">
                <h5 class="indigo-text text-accent-4">logo - Parqueadero de Francisco</h5><br>
                <h6 class="indigo-text text-accent-4">Sistema de parqueo con calidad</h6></div>
            </div>
            <div class="section"></div>
            <div class="divider"></div>
            <div class="row">
                <form method="POST" action="{{ route('login') }}">
                            @csrf

                    <div class="row">
                        <div class="input-field col s12 m12 l7 offset-l2">
                            <i class="material-icons prefix">email</i>
                            <input id="email" type="email" class="validate {{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required >
                            <label for="email">Correo Electronico</label>
                            @if ($errors->has('email'))
                                <span class="red-text col s12 offset-l1" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12 m12 l7 offset-l2">
                            <i class="material-icons prefix">https</i>
                            <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                            <label for="password">Contraseña</label>
                             @if ($errors->has('password'))
                                <span class="red-text col s12 offset-l1" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="row">     
                        <p class="center">
                            <label>
                                <input  type="checkbox" {{ old('remember') ? 'checked' : '' }} >
                                <span class="indigo-text text-accent-4">Recuerdame</span>
                            </label>
                        </p>
                    </div>

                    <div class="row">
                        <button type='submit' name='btn_login' class='col s12 m12 l7 offset-l2 btn btn-large waves-effect waves-light indigo accent-4'>
                            Ingresar <i class="material-icons prefix right">chevron_right</i>
                        </button>
                        
                    </div>
                    <div class="row">
                    <a class="col s12 m12 l7 offset-l2 indigo-text text-accent-4" href="{{ route('password.request') }}">Olvidaste tu contraseña? </a> 
                    </div>
                </form>
            </div>


        </div>

        <div class="col s12 m12 l8 black img-portada height-img" style="background-image: url('http://rehabitia.com/wp-content/uploads/2017/03/parking-Bilbao.jpg'); min-height: 800px; padding: 0px 0px; margin: 0px;" >
            
            <h5 class="white-text">Imagen de Background</h5>

        </div>



    </div>
</div>

@endsection
