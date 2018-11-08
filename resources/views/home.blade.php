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
					<!-- <div class="row">
						<div class="col s6 m1 l1 config-caja-celda card-panel center">

							<a class="btn-large  s12 config-celdas red lighten-1 dropdown-trigger" data-target='c1'>C1</a>
							<span class="new light-blue-text hours"><strong class="indigo-text text-accent-4">10h14m10s</strong></span>
						</div>
						<div class="col s6 m1 l1 config-caja-celda card-panel card-panel"><a class="btn-large config-celdas  ">C2</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large config-celdas  grey ">C3</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large config-celdas  grey ">C4</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large config-celdas grey ">C5</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large config-celdas  grey ">C6</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large config-celdas  grey ">C7</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large config-celdas  grey ">C8</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large config-celdas  grey ">C9</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large grey ">C10</a></div>
					</div> -->

					<!-- <div class="row">
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large  grey ">C11</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large grey ">C12</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large  grey ">C13</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large  grey ">C14</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large  grey ">C15</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large grey ">C16</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large  grey ">C17</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large  grey ">C18</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large  grey ">C19</a></div>
						<div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large  grey ">C20</a></div>
					</div> -->
                        <panel></panel>
				</div>
			</div>

			<div class="divider"></div>

		</div>
	</div>





@endsection
