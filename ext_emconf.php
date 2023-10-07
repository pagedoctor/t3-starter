<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Pagedoctor Starter',
    'description' => 'Starter extension to get started with Pagedoctor in no time.',
    'category' => 'be',
    'state' => 'beta',
    'author' => 'Colin Atkins',
    'author_email' => 'atkins@hey.com',
    'uploadfolder' => '0',
    'version' => '0.5.4',
    'constraints' => [
        'depends' => [
            'typo3' => '12.0.0-12.1.999',
        ],
        'conflicts' => [],
        'suggests' => [
            'pagedoctor' => '0.0.0-1.999.999',
            'setup' => '12.0.0-12.1.999',
        ],
    ],
];