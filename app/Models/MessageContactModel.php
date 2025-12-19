<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MessageContactModel extends Model
{
    protected $table = 'message_contact';
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = true;
    protected $fillable = [
        'name',
        'email',
        'subject',
        'message',
    ];
}
