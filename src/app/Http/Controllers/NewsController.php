<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    { 
        return Inertia::render('Home', [
            'title' => 'Top Info',
            'news' => News::paginate(6)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'max:25|required',
            'description' => 'max:55|required',
            'category' => 'max:25|required',
        ]);
        $validate['author'] = auth()->user()->email;
        if (Auth::check($validate)) {
            News::create($validate);
            return back()->with('message', 'data sucsess created');
        }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news, Request $request)
    {
        // return Inertia::render('Edit', [
        //     'title' => 'Top gokil',
        //     'myNews' => $news->find($request->id)
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request)
    {
        return Inertia::render('Edit', [
            'title' => 'Top Info',
            'myNews' => $news->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $validate = $request->validate([
            'title' => 'max:25|required',
            'description' => 'max:55|required',
            'category' => 'max:25|required',
        ]);
        $validate['author'] = auth()->user()->email;
            News::where('id', $request->id)->update($validate);
            return back()->with('message', 'data sucsess updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news, Request $request)
    {
        News::destroy($request->id);
        return to_route('dashboard')->with('message', 'data berhasil di delete');
    }
}
