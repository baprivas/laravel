@extends('layouts.app')

@section('content')



	 <ul id='dropdown1' class='dropdown-content'>
	    <li><a href="#!">one</a></li>
	    <li><a href="#!">two</a></li>
	    <li class="divider" tabindex="-1"></li>
	    <li><a href="#!">three</a></li>
	    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
	    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
    </ul>


    <ul id='c1' class='dropdown-content'>
    	<li><a href="#!" class="indigo-text text-accent-4">Placa - GJYRDSDS</a></li>
    	<li class="divider" tabindex="-1"></li>
	    <li><a class="new small indigo-text text-accent-4 " > tiempo: 10h14m10s</a></li>
    </ul>

<div class="row">
		<div class="col s4 m4 l2">
			 <ul id="sidenav-left" class="sidenav sidenav-fixed indigo accent-4 " style="transform: translateX(0px);">
			      <li><a class='dropdown-trigger1 white-text' href='#' data-target='dropdown1'><i class="material-icons">account_circle</i>Admin<i class="material-icons right">arrow_drop_down</i></a></li>
			      <li><a href="#!">Second Sidebar Link</a></li>
    		</ul>
		</div>
		<div class="col s8 m8 l10">
			<div class="section">
				<h5 class="indigo-text text-accent-4">Panel de Control</h5>
				<div class="divider"></div>
			</div>
			<div class="section"></div>
			<div class="row">
				<div class="col s12 m12 l12">
                        <panel></panel>

				</div>
			</div>

			<div class="divider"></div>

            <div class="row">
                <div class="col s12 m12 l12">
                        <div class="section"></div>
                        <div class="row">
                            <div class="col s12 m12 l6 center"><a href="#entrada" class="col s12 m12 l12 btn btn-large indigo accent-4 modal-trigger">Entrada</a></div>
                            <div class="col s12 m12 l6 center"><a  class="col s12 m12 l12 btn btn-large indigo accent-4 modal-trigger">Salida</a></div>
                        </div>
                </div>
            </div>
            <pre>@{{ $data }}</pre>
        </div>
        
	</div>




@include('entrada')
@endsection
