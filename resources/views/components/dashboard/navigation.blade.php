<?php
// dd('tableau.detail');
use Detection\MobileDetect;

$d = new MobileDetect();

$menus = [
    [
        'label' => 'Dashboard',
        'route' => 'tableau',
        'icon' => 's-chart-bar-square',
    ],
    [
        'label' => 'Assets',
        'route' => 'assets',
        'icon' => 'o-table-cells',
    ],
];

// Check if the user has 'Auditor' in their groups
if (Auth::user()->groups()->whereIn('name', ['Auditor', 'Admin'])->exists()) {
    $menus[] = [
        'label' => 'Audit',
        'route' => 'audits',
        'icon' => 'o-users',
    ];
}

?>

@if ($d->isMobile())
    @livewire('bottomnav', ['menus' => $menus])
@else
    @livewire('sidebar', ['menus' => $menus])
@endif
