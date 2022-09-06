@extends('shopify-app::layouts.default')

@section('content')

{{-- You are: (shop domain name) --}}
<p>You are: {{ $shopDomain ?? Auth::user()->name }}</p>


<div id="root"></div>

@endsection

@section('scripts')
@parent
{{-- <script src="{{asset('js/app.js')}}"></script> --}}
<script src="http://localhost:8000/js/app.js"></script>

@endsection
