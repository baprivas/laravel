@extends('layouts.app')

@section('content')
	 <ul id='dropdown1' class='dropdown-content'>
	    <li><a href="">Salir</a></li>

    </ul>

<div class="row">

		<div class="col s8 m8 l12">
				<div class="section">
					<h5 class="indigo-text text-accent-4">Panel de Control -  <span class="right" id="reloj"></span></h5>
					<div class="divider"></div>
				</div>
				<div class="section"></div>
				<div class="row">
						<panel></panel>
				</div>
				<div class="divider"></div>
				<div class="row">
				<div class="col s12 m12 l12">
							<div class="col s12 m12 l5">
								<div class="section">
											<h5>Tips</h5>
									<div class="section"></div>
									<div class="section"></div>
									<p class="center"> Bienvenido a EL Portal Francisco Alegra, El mejor Servicio para administrar tu Negocio de manera eficaaz, siempre disponible por la Web</p>
								</div>			
								

							</div>
							<div class="col s12 m12 l7">
							<div class="section">
								<h6>Score</h6>
							</div>
							<score></score>
							
							</div>
					
					</div>
				</div>
		</div>
</div>


@endsection
