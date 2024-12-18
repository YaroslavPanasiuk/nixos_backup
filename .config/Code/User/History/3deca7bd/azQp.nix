{pkgs ? import <nixpkgs> {}}:

pkgs.mkShell
{
	nativeBuildInputs = with pkgs;  [
		python311Packages.numpy
		python311Packages.pandas
	];
}