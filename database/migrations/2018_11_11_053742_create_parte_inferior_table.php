<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParteInferiorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inferiores', function (Blueprint $table) {
            $table->increments('id');
            $table->string('celda')->unique();
            $table->string('estado')->default('disponible');
            $table->string('placa')->nullable();
            $table->string('marca')->nullable();
            $table->string('duracion')->nullable();
            $table->string('celdafinal')->nullable();
            $table->string('panel')->default('inferior');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inferiores');
    }
}
